using API.Entity;
using Microsoft.EntityFrameworkCore;

namespace API.Data;
public class DataContext: DbContext
{
    public DataContext(DbContextOptions options) : base(options)//Buradan DataContext in kullanıldığı Program.cs deki bağlantı kısmına veri gönderdik(options)
    {
        
    }
    public DbSet<Product> Products => Set<Product>(); //arrow function ile referans verip null olmamasını sağlıyoruz.
}
