using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using FinalProject.Data;
using FinalProject.Models;
using Microsoft.AspNetCore.Authorization;

namespace FinalProject.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class ToDoController : Controller
    {
        private ToDoContext dbContext;

        public ToDoController(ToDoContext todoDBContext)
        {
            this.dbContext = todoDBContext;
        }

        // GET: api/<controller>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var user = User.Identity.Name;
            var todo = await this.dbContext.toDo.Where(t=>t.User == user).ToListAsync();
            //var todo2 = await this.dbContext.toDo.FromSql("SELECT * FROM dbo.ToDo").OrderByDescending(x => x.Name).ToListAsync();
            return new ObjectResult(todo);
        }
        //// GET: api/<controller>
        //[HttpGet]
        //public async Task<IActionResult> Get([FromBody]string type)
        //{
        //    //var todo = null;
        //    if(type=="desc")
        //    {
        //        var todo = await this.dbContext.toDo.FromSql("SELECT * FROM dbo.ToDo").OrderByDescending(x => x.Name).ToListAsync();
        //        return new ObjectResult(todo);
        //    }
        //    else
        //    {
        //        var todo = await this.dbContext.toDo.FromSql("SELECT * FROM dbo.ToDo").OrderBy(x => x.Name).ToListAsync();
        //        return new ObjectResult(todo);
        //    }
            
        //}
        // GET api/<controller>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                var todo = this.dbContext.toDo.FirstOrDefault(p => p.ID == id);
                if (todo == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound);
                }
                return new ObjectResult(todo);
                
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }
        }

        // POST api/<controller>
        [HttpPost]
        public IActionResult Post([FromBody]ToDo value)
        {
            this.dbContext.Add(value);
            this.dbContext.SaveChanges();
            return StatusCode(201);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]ToDo value)
        {
            try
            {
                var todo = this.dbContext.toDo.FirstOrDefault(p => p.ID == id);
                if (todo == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound);
                }
                todo.Name = value.Name;
                todo.Date = value.Date;
                todo.Description = value.Description;
                todo.Tag = value.Tag;
                todo.Status = value.Status;
                this.dbContext.toDo.Update(todo);
                this.dbContext.SaveChanges();
                return StatusCode(StatusCodes.Status202Accepted);
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                var todo = this.dbContext.toDo.FirstOrDefault(p => p.ID == id);
                if (todo == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound);
                }

                this.dbContext.toDo.Remove(todo);
                this.dbContext.SaveChanges();
                return StatusCode(StatusCodes.Status200OK);
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }

        }
    }
}
