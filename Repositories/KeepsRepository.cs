using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Dapper;

namespace Keepr.Repositories
{
  public class KeepsRepository
  {
    private readonly IDbConnection _db;

    public KeepsRepository(IDbConnection db)
    {
      _db = db;
    }

    //SECTION GET requests

    internal IEnumerable<Keep> GetAll()
    {
      string sql = "SELECT * FROM Keeps WHERE isPrivate = 0;";
      return _db.Query<Keep>(sql);
    }
    internal IEnumerable<Keep> GetKeepsByUserId(string userId)
    {
      string sql = "SELECT * FROM keeps WHERE userId = @UserId";
      return _db.Query<Keep>(sql, new { userId });
    }

    internal Keep GetById(int id)
    {
      string sql = "SELECT * FROM keeps WHERE id = @Id";
      return _db.QueryFirstOrDefault<Keep>(sql, new { id });
    }
    internal IEnumerable<VaultKeepViewModel> GetKeepsByVaultId(int vaultId)
    {
      string sql = @"
        SELECT
        k.*,
        v.title As Vault,
        vk.id AS VaultKeepId
        FROM vaultkeeps vk
        INNER JOIN keeps k ON k.id = vk.keepId
        INNER JOIN vaults v ON v.id = vl.vaultId
        WHERE vaultId = @VaultId AND isPublished = 1";
      return _db.Query<VaultKeepViewModel>(sql, new { vaultId });
    }

    //!SECTION end GET requests

    //SECTION CREATE requests

    internal Keep Create(Keep newKeep)
    {
      string sql = @"
        INSERT INTO keeps
        (id, userId, name, description, img, isPrivate, views, shares, keeps)
        VALUES
        (@Id, @UserId, @Name, @Description, @Img, @IsPrivate, @Views, @Shares, @Keeps);
        SELECT LAST_INSERT_ID()";
      newKeep.Id = _db.ExecuteScalar<int>(sql, newKeep);
      return newKeep;
    }
    //!SECTION end CREATE requests

    //SECTION PUT requests
    internal bool ViewKeep(Keep keepToView)
    {
      string sql = @"
            UPDATE keeps
            SET
            views = @Views
            WHERE id = @Id
          ";
      int affectedRows = _db.Execute(sql, keepToView);
      return affectedRows == 1;
    }

    internal bool Edit(Keep keepToUpdate, string userId)
    {
      keepToUpdate.UserId = userId;
      string sql = @"
            UPDATE keeps
            SET
            views = @Views,
            name = @Name,
            description = @Description,
            img = @Img,
            isPrivate = @IsPrivate,
            shares = @Shares,
            keeps = @keeps
            WHERE id = @Id
            AND userId = @UserId";
      int affectedRows = _db.Execute(sql, keepToUpdate);
      return affectedRows == 1;
    }

    //!SECTION end PUT requests

    //SECTION DELETE requests
    internal bool Delete(int id, string userId)
    {
      string sql = "DELETE FROM keeps WHERE id = @Id AND userId = @UserId LIMIT 1";
      int affectedRows = _db.Execute(sql, new { id, userId });
      return affectedRows == 1;
    }

    //!SECTION end DELETE requests

  }
}