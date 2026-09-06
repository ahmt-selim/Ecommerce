using API.Entity;
using Microsoft.AspNetCore.Identity;

namespace API.Data;

public static class SeedDatabase
{
    public static async void Initialize(IApplicationBuilder app)
    {
        var userManager = app.ApplicationServices
                            .CreateScope()
                            .ServiceProvider
                            .GetRequiredService<UserManager<AppUser>>();

        var roleManeger = app.ApplicationServices
                            .CreateScope()
                            .ServiceProvider
                            .GetRequiredService<RoleManager<AppRole>>();

        if (!roleManeger.Roles.Any())
        {
            var customer = new AppRole { Name = "Customer"};
            var admin = new AppRole { Name = "Admin"};

            await roleManeger.CreateAsync(customer);
            await roleManeger.CreateAsync(admin);
        }

        if (!userManager.Users.Any())
        {
            var customer = new AppUser { Name = "Çınar Turan", UserName = "cinarturan", Email = "cinarturan@gmail.com"};
            var admin = new AppUser { Name = "Sadık Turan", UserName = "sadikturan", Email = "sadikturan@gmail.com"};

            await userManager.CreateAsync(customer, "Customer_123");
            await userManager.AddToRoleAsync(customer, "Customer");

            await userManager.CreateAsync(admin, "Admin_123");
            await userManager.AddToRolesAsync(customer, ["Admin", "Customer"]);
        }
    }
}