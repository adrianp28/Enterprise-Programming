using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Project4.Models;

namespace Project4.Data
{
    public static class DbInitializer
    {
        public static void Initialize(ToDoContext context)
        {
            context.Database.EnsureCreated();

            if (context.toDo.Any())
            {
                return;
            }
            var todos = new ToDo[]
            {
                new ToDo{ Name="Eat Chicken Wings", Description="I need to finish the chicken wings from last Sunday", Date=DateTime.Now, Tag="Food" },
                new ToDo { Name = "Change oil", Description = "Oil is getting sludgy", Date = DateTime.Now, Tag="Maitenence" }
            };
            foreach (ToDo d in todos)
            {
                context.toDo.Add(d);
            }
            
            context.SaveChanges();
        }
    }
}
