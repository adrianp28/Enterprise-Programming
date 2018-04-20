using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Project4.Data;
using Project4.Models;

namespace Project4.Controllers
{
    [Route("api/[controller]")]
    public class WarningController : Controller
    {
        private ToDoContext dbContext;

        public WarningController(ToDoContext todoDBContext)
        {
            this.dbContext = todoDBContext;
        }

        // GET: api/<controller>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var warning = await this.dbContext.warning.ToListAsync();
            //var todo2 = await this.dbContext.toDo.FromSql("SELECT * FROM dbo.ToDo").OrderByDescending(x => x.Name).ToListAsync();
            return new ObjectResult(warning);
        }
        
        // GET api/<controller>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                var warning = this.dbContext.warning.FirstOrDefault(p => p.ID == id);
                if (warning == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound);
                }
                return new ObjectResult(warning);

            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }
        }

        // POST api/<controller>
        [HttpPost]
        public IActionResult Post([FromBody]Warning value)
        {
            this.dbContext.Add(value);
            this.dbContext.SaveChanges();
            return StatusCode(201);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Warning value)
        {
            try
            {
                var warning = this.dbContext.warning.FirstOrDefault(p => p.ID == id);
                if (warning == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound);
                }
                warning.days = value.days;
                warning.hours = value.hours;
                this.dbContext.warning.Update(warning);
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
                var warning = this.dbContext.warning.FirstOrDefault(p => p.ID == id);
                if (warning == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound);
                }

                this.dbContext.warning.Remove(warning);
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
