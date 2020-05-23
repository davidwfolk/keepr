using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Dapper;

namespace Keepr.Repositories
{
  public class VaultsRepository
  {
    private readonly IDbConnection _db;

    public VaultsRepository(IDbConnection db)
    {
      _db = db;
    }

    //SECTION GET requests
    internal IEnumerable<Vault> GetAll()
    {
      string sql = "SELECT * FROM vaults";
      return _db.Query<Vault>(sql);
    }

    internal Vault GetById(int id)
    {
      string sql = "SELECT * FROM vaults WHERE id = @Id";
      return _db.QueryFirstOrDefault<Vault>(sql, new { id });
    }

    // internal Vault GetKeepsByVaultId(int id)
    // {
    //   string sql = "SELECT * FROM vaults WHERE id = @Id";
    //   return _db.QueryFirstOrDefault<Vault>(sql, new { id });
    // }
    //!SECTION end GET requests

    //SECTION POST requests

    internal Vault Create(Vault newVault)
    {
      string sql = @"
        INSERT INTO vaults
        (name, description, id, userId)
        VALUES
        (@Name, @Description, @Id, @UserId);
        SELECT LAST_INSERT_ID()";
      newVault.Id = _db.ExecuteScalar<int>(sql, newVault);
      return newVault;
    }

    //!SECTION end POST requests

    //SECTION DELETE requests

    internal bool Delete(int id, string userId)
    {
      string sql = "DELETE FROM vaults WHERE id = @Id AND userId = @UserId LIMIT 1";
      int affectedRows = _db.Execute(sql, new { id, userId });
      return affectedRows == 1;
    }

    //!SECTION end DELETE requests

  }
}