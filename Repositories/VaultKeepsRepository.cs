using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Dapper;

namespace Keepr.Repositories
{
    public class VaultKeepsRepository
    {
        private readonly IDbConnection _db;

        public VaultKeepsRepository(IDbConnection db)
        {
            _db = db;
        }


    internal VaultKeep GetById(int Id)
    {
      string sql = "SELECT * FROM vaultkeeps WHERE id = @Id";
      return _db.QueryFirstOrDefault<VaultKeep>(sql, new { Id });
    }
    internal VaultKeep Create(VaultKeep newVaultKeep)
    {
      string sql = @"
        INSERT INTO vaultkeeps
        (keepId, vaultId, id, userId)
        VALUES
        (@KeepId, @VaultId, @Id, @UserId);
        SELECT LAST_INSERT_ID()";
      newVaultKeep.Id = _db.ExecuteScalar<int>(sql, newVaultKeep);
      return newVaultKeep;
    }

    internal bool Delete(int id)
    {
      string sql = "DELETE FROM vaultkeeps WHERE id = @id LIMIT 1";
      int affectedRows = _db.Execute(sql, new { id });
      return affectedRows == 1;
    }
  }
}