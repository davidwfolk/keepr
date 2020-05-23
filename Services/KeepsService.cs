using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
    public class KeepsService
    {
        private readonly KeepsRepository _repo;
        public KeepsService(KeepsRepository repo)
        {
            _repo = repo;
        }
//SECTION GET requests

        public IEnumerable<Keep> GetAll()
        {
            return _repo.GetAll();
        }
        internal IEnumerable<Keep> GetByUserId(string userId)
        {
            return _repo.GetKeepsByUserId(userId);
        }

        public Keep GetById(int id)
        {
            Keep foundKeep = _repo.GetById(id);
            if (foundKeep == null)
            {
                throw new Exception("Invalid Id");
            }
            return foundKeep;
        }
//!SECTION end GET requests

//SECTION CREATE requests

        public Keep Create(Keep newKeep)
        {
            return _repo.Create(newKeep);
        }
//!SECTION end CREATE requests

//SECTION PUT requests

        internal Keep Edit(Keep keepToUpdate, string userId)
        {
            Keep foundKeep = GetById(keepToUpdate.Id);
            if (foundKeep.UserId != userId && foundKeep.Views < keepToUpdate.Views)
            {
                if (_repo.ViewKeep(keepToUpdate))
                {
                    foundKeep.Views = keepToUpdate.Views;
                    return foundKeep;
                }
                throw new Exception("Out of Bounds - can't view the keep");
            }
            if (_repo.Edit(keepToUpdate, userId))
            {
                return keepToUpdate;
            }
            throw new Exception("This is why they don't put erasers on golf pencils - so you can't edit");
        }

//!SECTION end PUT requests

//SECTION DELETE requests

        internal string Delete(int id, string userId)
        {
            Keep foundKeep = GetById(id);
            if (foundKeep.UserId != userId)
            {
                throw new Exception("This is not your keep!");
            }
            if (_repo.Delete(id, userId))
            {
                return "Deleted.  #GolfClap";
            }
            throw new Exception("You're gonna need a mulligan...it's not deleting");
        }

//!SECTION end DELETE requests
    }
}