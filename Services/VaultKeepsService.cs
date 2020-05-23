using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class VaultKeepsService
  {
    private readonly VaultKeepsRepository _repo;
    public VaultKeepsService(VaultKeepsRepository repo)
    {
      _repo = repo;
    }

    internal VaultKeep Create(VaultKeep newVaultKeep)
    {
      return _repo.Create(newVaultKeep);
    }

    internal VaultKeep Delete(int id, string userId)
    {
      VaultKeep foundVaultKeep = _repo.GetById(id);
      if (foundVaultKeep.UserId != userId)
      {
        throw new Exception("This is not your VaultKeep!");
      }
      if (_repo.Delete(id))
      {
        return foundVaultKeep;
      }
      throw new Exception("Need a mulligan on deleting this VaultKeep?");
    }
  }
}