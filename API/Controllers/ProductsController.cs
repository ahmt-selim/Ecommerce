using API.Entity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")] //api/products
public class ProductsController : ControllerBase
{
    [HttpGet]
    public IActionResult GetProducts()
    {
        return Ok(new List<Product>()
        {
            new Product{Id=1, Name="IPhone 15", Description="Telefon Açıklaması", ImageUrl="1.jpg", Price=7000, IsActive=true,Stock=100},
new Product{Id=2, Name="IPhone 16", Description="Telefon Açıklaması", ImageUrl="2.jpg", Price=8000, IsActive=true,Stock=100},
new Product{Id=3, Name="IPhone 16 Pro", Description="Telefon Açıklaması", ImageUrl="3.jpg", Price=9000, IsActive=false,Stock=100},
new Product{Id=4, Name="IPhone 15 Pro Max", Description="Telefon Açıklaması", ImageUrl="4.jpg", Price=10000, IsActive=true,Stock=100}
        });
        

    }
    [HttpGet("{id}")]
    public IActionResult GetProduct(int id)
    {
        return Ok(new Product {
            Id = 2,
            Name = "IPhone 16",
            Description = "Telefon Açıklaması",
            ImageUrl = "2.jpg",
            Price = 8000,
            IsActive = true,
            Stock = 100
        });
    
    }
}
