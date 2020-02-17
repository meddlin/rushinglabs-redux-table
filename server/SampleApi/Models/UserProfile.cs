using System;

namespace SampleApi.Models 
{
    public class UserProfile 
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool Active { get; set; }
        public DateTime DateCreated { get; set; }
    }
}