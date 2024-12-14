

interface User {
    id: string;
    name: string;
    email: string;
    role: "Super Admin" | "Admin" | "Manager";
    accessLevel: string;
    details?: string;
    joinDate: string;
    avatar: string;
    background: string;
  }
  const users: User[] = [
    {
      id: "1",
      name: "Roy Sharaliy",
      email: "roy@sharaliy.com",
      role: "Super Admin",
      accessLevel: "Full Access",
      details: "#details",
      joinDate: "Since Nov, 2024",
      avatar: "/images/person1.png",
      background: "blue",
    },
    {
      id: "2",
      name: "Afi Noor",
      email: "afi@royaltap.shop",
      role: "Super Admin",
      accessLevel: "Full Access",
      details: "#details",
      joinDate: "Since Nov, 2024",
      avatar: "/images/person3.png",
      background: "red",
    },
    {
      id: "3",
      name: "Tehila",
      email: "tehila@royal.marketing",
      role: "Admin",
      accessLevel: "Admin Access",
      details: "(Left menu)",
      joinDate: "Since Nov, 2024",
      avatar: "/images/person1.png",
      background: "gray",
    },
    {
      id: "4",
      name: "Roy Sharaliy",
      email: "roy@sharaliy.com",
      role: "Super Admin",
      accessLevel: "Full Access",
      details: "#details",
      joinDate: "Since Nov, 2024",
      avatar: "/images/person4.png",
      background: "green",
    },
    {
      id: "5",
      name: "Afi Noor",
      email: "afi@royaltap.shop",
      role: "Super Admin",
      accessLevel: "Full Access",
      details: "#details",
      joinDate: "Since Nov, 2024",
      avatar: "/images/person2.png",
      background: "blue",
    },
    {
      id: "6",
      name: "Tehila",
      email: "tehila@royal.marketing",
      role: "Admin",
      accessLevel: "Admin Access",
      details: "(Left menu)",
      joinDate: "Since Nov, 2024",
      avatar: "/images/person3.png",
      background: "purple",
    },
    {
      id: "7",
      name: "Roy Sharaliy",
      email: "roy@sharaliy.com",
      role: "Super Admin",
      accessLevel: "Full Access",
      details: "#details",
      joinDate: "Since Nov, 2024",
      avatar: "/images/person4.png",
      background: "pink",
    },
    {
      id: "8",
      name: "Afi Noor",
      email: "afi@royaltap.shop",
      role: "Super Admin",
      accessLevel: "Full Access",
      details: "#details",
      joinDate: "Since Nov, 2024",
      avatar: "/images/person1.png",
      background: "orange",
    },
    {
      id: "9",
      name: "Tehila",
      email: "tehila@royal.marketing",
      role: "Admin",
      accessLevel: "Admin Access",
      details: "(Left menu)",
      joinDate: "Since Nov, 2024",
      avatar: "/images/person2.png",
      background: "yellow",
    },
   
  ];

 

  interface Agent {
    id: string;
    name: string;
    email: string;
    phone: string; // New property
    city: string; // New property
    state: string; // New property
    country: string; // New property
    zip: string; // New property
    joinDate: string;
    avatar: string;
    background: string;
  }
  


const agents: Agent[] = [
    {
      id: "1",
      name: "Roy Sharaliy",
      email: "roy@sharaliy.com",
      phone: "212-555-6789",
      city: "Los Angeles",
      state: "California",
      country: "USA",
      zip: "90001",
      joinDate: "Since Nov, 2024",
      avatar: "/images/person1.png",
      background: "blue",
    },
    {
      id: "2",
      name: "Afi Noor",
      email: "afi@royaltap.shop",
      phone: "312-555-7890",
      city: "Chicago",
      state: "Illinois",
      country: "USA",
      zip: "60601",
      joinDate: "Since Dec, 2023",
      avatar: "/images/person2.png",
      background: "red",
    },
    {
      id: "3",
      name: "Tehila Cohen",
      email: "tehila@royal.marketing",
      phone: "415-555-8901",
      city: "San Francisco",
      state: "California",
      country: "USA",
      zip: "94101",
      joinDate: "Since Jan, 2023",
      avatar: "/images/person3.png",
      background: "gray",
    },
    {
      id: "4",
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "646-555-1234",
      city: "New York",
      state: "New York",
      country: "USA",
      zip: "10001",
      joinDate: "Since Mar, 2022",
      avatar: "/images/person4.png",
      background: "green",
    },
    {
      id: "5",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "786-555-5678",
      city: "Miami",
      state: "Florida",
      country: "USA",
      zip: "33101",
      joinDate: "Since Jul, 2021",
      avatar: "/images/person2.png",
      background: "purple",
    },
    {
      id: "6",
      name: "Emily Davis",
      email: "emily.davis@example.com",
      phone: "206-555-3456",
      city: "Seattle",
      state: "Washington",
      country: "USA",
      zip: "98101",
      joinDate: "Since Oct, 2024",
      avatar: "/images/person1.png",
      background: "pink",
    },
    {
      id: "7",
      name: "Michael Lee",
      email: "michael.lee@example.com",
      phone: "480-555-6543",
      city: "Phoenix",
      state: "Arizona",
      country: "USA",
      zip: "85001",
      joinDate: "Since Apr, 2023",
      avatar: "/images/person4.png",
      background: "orange",
    },
    {
      id: "8",
      name: "Sara Ahmed",
      email: "sara.ahmed@example.com",
      phone: "503-555-4321",
      city: "Portland",
      state: "Oregon",
      country: "USA",
      zip: "97201",
      joinDate: "Since Jun, 2022",
      avatar: "/images/person1.png",
      background: "yellow",
    },
    {
      id: "9",
      name: "Liam Martinez",
      email: "liam.martinez@example.com",
      phone: "702-555-7890",
      city: "Las Vegas",
      state: "Nevada",
      country: "USA",
      zip: "89101",
      joinDate: "Since Feb, 2024",
      avatar: "/images/person2.png",
      background: "cyan",
    },
    {
      id: "10",
      name: "Sophia Brown",
      email: "sophia.brown@example.com",
      phone: "214-555-6789",
      city: "Dallas",
      state: "Texas",
      country: "USA",
      zip: "75201",
      joinDate: "Since Aug, 2021",
      avatar: "/images/person3.png",
      background: "teal",
    },
  ];




  interface Report {
    orderId: string;
    orderDate: string;
    name: string;
    businessName: string; // New property
    city: string; // New property
    state: string; // New property
    zip: string; // New property
   itemsSold:number;
   amount:number
  }


  const sampleData:Report[] = [
    {
      orderId: "12344312",
      orderDate: "Oct 23 at 9:36 PM",
      name: "Anoy Sharally",
      businessName: "#business name",
      city: "Los Angeles",
      state: "California",
      zip: "55555",
      itemsSold: 3,
      amount: 254412.22,
    },
    // Duplicate the data for demonstration
    {
      orderId: "12344312",
      orderDate: "Oct 23 at 9:36 PM",
      name: "Roy Sharally",
      businessName: "#business name",
      city: "Los Angeles",
      state: "New york",
      zip: "55555",
      itemsSold: 3,
      amount: 254412.22,
    },
    {
      orderId: "12344312",
      orderDate: "Oct 23 at 9:36 PM",
      name: "Roy Sharally",
      businessName: "#business name",
      city: "Los Angeles",
      state: "California",
      zip: "55555",
      itemsSold: 3,
      amount: 254412.22,
    },
    {
      orderId: "12344312",
      orderDate: "Oct 23 at 9:36 PM",
      name: "Toy Sharally",
      businessName: "#business name",
      city: "Los Angeles",
      state: "California",
      zip: "55555",
      itemsSold: 3,
      amount: 254412.22,
    },
  ]
  

export { users,agents,sampleData };
export type { User,Agent ,Report};
