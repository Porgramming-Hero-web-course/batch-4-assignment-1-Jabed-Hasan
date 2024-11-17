
interface Profile {
    name: string;  
    age: number;   
    email: string; 
  }
  

  function updateProfile(Currentprofile: Profile, updates: Partial<Profile>): Profile {
    
    return { ...Currentprofile, ...updates };
  }
  

   //Sample Input
 
  const myProfile: Profile = { 
    name: "Alice", 
    age: 25, 
    email: "alice@example.com" 
  };
  const updatedProfile = updateProfile(myProfile, { age: 26 });
  console.log(updatedProfile);
  
 