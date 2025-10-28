using API.Entity;
using Microsoft.EntityFrameworkCore;

namespace API.Data;
public class DataContext: DbContext
{
    public DataContext(DbContextOptions options) : base(options)//Buradan DataContext in kullanıldığı Program.cs deki bağlantı kısmına veri gönderdik(options)
    {
        
    }
    public DbSet<Product> Products => Set<Product>(); //arrow function ile referans verip null olmamasını sağlıyoruz.

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Product>().HasData(
            new List<Product>
            {
new Product{Id=1, Name="IPhone 15", Description="Telefon Açıklaması", ImageUrl="iphone15.jpg", Price=7000, IsActive=true,Stock=100},
new Product{Id=2, Name="IPhone 16", Description="Telefon Açıklaması", ImageUrl="iphone16.webp", Price=8000, IsActive=true,Stock=100},
new Product{Id=3, Name="IPhone 16 Pro", Description="Telefon Açıklaması", ImageUrl="iphone16pro.jpg", Price=9000, IsActive=false,Stock=100},
new Product{Id=4, Name="IPhone 15 Pro Max", Description="Telefon Açıklaması", ImageUrl="iphone15promax.webp", Price=10000, IsActive=true,Stock=100},
            }
        );//Program çalıştırıldığında veritabanına test verileri kaydeder.
    }
}
