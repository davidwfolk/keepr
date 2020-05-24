using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class VaultsService
  {
    private readonly VaultsRepository _repo;
    public VaultsService(VaultsRepository repo)
    {
      _repo = repo;
    }
    //SECTION GET requests

    internal IEnumerable<Vault> GetAll()
    {
      return _repo.GetAll();
    }

        internal IEnumerable<Vault> GetByUserId(string userId)
    {
      return _repo.GetVaultsByUserId(userId);
    }

    public Vault GetById(int id)
    {
      Vault foundVault = _repo.GetById(id);
      if (foundVault == null)
      {
        throw new Exception("Invalid Id");
      }
      return foundVault;
  
    }

    //!SECTION end GET requests

    //SECTION POST requests
    internal Vault Create(Vault newVault)
    {
      return _repo.Create(newVault);
    }
    //!SECTION end POST requests

    //SECTION DELETE requests

    internal string Delete(int id, string userId)
    {
      Vault foundVault = GetById(id);
      if (foundVault.UserId != userId)
      {
        throw new Exception("This is not your Vault!");
      }
      if (_repo.Delete(id, userId))
      {
        return "Deleted. #GolfClap";
      }
      throw new Exception("You're gonna need a mulligan...it's not deleting");
    }

    //!SECTION end DELETE requests

  }
}