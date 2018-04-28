using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FinalProject.Models;
using Microsoft.AspNetCore.Identity;

namespace FinalProject.Data
{
    public static class DbInitializer
    {
        public static async Task InitializeAsync(ToDoContext context, UserManager<ApplicationUser> userManager)
        {
            context.Database.EnsureCreated();
            if (await userManager.FindByEmailAsync("tstewart11@uco.edu") == null)
            {
                ApplicationUser newUser = new ApplicationUser()
                {
                    Email = "tstewart11@uco.edu",
                    UserName = "tstewart11"
                };
                var result = await userManager.CreateAsync(newUser, "Hunter2!");
                ApplicationUser newUser2 = new ApplicationUser()
                {
                    Email = "joebob@gmail.com",
                    UserName = "joebob"
                };
                var result2 = await userManager.CreateAsync(newUser2, "P&ssw0rd");
            }
            if (context.toDo.Any())
            {
                return;
            }
            var todos = new ToDo[]
            {
                new ToDo{ Name="Eat Chicken Wings", Description="I need to finish the chicken wings from last Sunday", Date=DateTime.UtcNow, Tag="Food", Status="Active", User="tstewart11" },
                new ToDo { Name = "Change oil", Description = "Oil is getting sludgy", Date = DateTime.UtcNow, Tag="Maitenence", Status = "Active", User="tstewart11" },
                new ToDo { Name = "Secure email", Description = "Change Secure Email", Date = DateTime.UtcNow, Tag="Work", Status = "Completed", User="joebob" }
            };
            foreach (ToDo d in todos)
            {
                context.toDo.Add(d);
            }
            
            context.SaveChanges();
            if(context.warning.Any())
            {
                return;
            }
            var warning = new Warning { days = 2, hours = 0 };
            context.warning.Add(warning);
            context.SaveChanges();
        }
    }
}
