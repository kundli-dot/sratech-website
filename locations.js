/* SRATECH — Country → State → City data for dependent dropdowns */
const LOCATIONS = {
  "India": {
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Tirupati", "Kurnool"],
    "Arunachal Pradesh": ["Itanagar", "Naharlagun"],
    "Assam": ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon"],
    "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga"],
    "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur", "Korba", "Durg"],
    "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar", "Bhavnagar", "Jamnagar"],
    "Haryana": ["Faridabad", "Gurugram", "Panipat", "Ambala", "Karnal", "Hisar", "Rohtak"],
    "Himachal Pradesh": ["Shimla", "Mandi", "Solan", "Dharamshala", "Kullu"],
    "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh"],
    "Karnataka": ["Bengaluru", "Mysuru", "Hubballi", "Mangaluru", "Belagavi", "Davanagere"],
    "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam", "Kannur"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain", "Sagar"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane", "Aurangabad", "Solapur", "Kolhapur"],
    "Manipur": ["Imphal", "Thoubal"],
    "Meghalaya": ["Shillong", "Tura"],
    "Mizoram": ["Aizawl", "Lunglei"],
    "Nagaland": ["Kohima", "Dimapur"],
    "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Sambalpur", "Berhampur"],
    "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Mohali", "Bathinda"],
    "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner", "Alwar"],
    "Sikkim": ["Gangtok", "Namchi"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Erode"],
    "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"],
    "Tripura": ["Agartala", "Udaipur"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi", "Noida", "Prayagraj", "Meerut", "Bareilly"],
    "Uttarakhand": ["Dehradun", "Haridwar", "Roorkee", "Haldwani", "Rishikesh"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Siliguri", "Asansol", "Bardhaman"],
    "Andaman and Nicobar Islands": ["Port Blair"],
    "Chandigarh": ["Chandigarh"],
    "Dadra and Nagar Haveli and Daman and Diu": ["Silvassa", "Daman", "Diu"],
    "Delhi": ["New Delhi", "Delhi", "Dwarka", "Rohini"],
    "Jammu and Kashmir": ["Srinagar", "Jammu", "Anantnag", "Baramulla"],
    "Ladakh": ["Leh", "Kargil"],
    "Lakshadweep": ["Kavaratti"],
    "Puducherry": ["Puducherry", "Karaikal", "Yanam"]
  },
  "United States": {
    "California": ["Los Angeles", "San Francisco", "San Diego", "San Jose", "Sacramento"],
    "New York": ["New York City", "Buffalo", "Rochester", "Albany"],
    "Texas": ["Houston", "Dallas", "Austin", "San Antonio"],
    "Florida": ["Miami", "Orlando", "Tampa", "Jacksonville"],
    "New Jersey": ["Newark", "Jersey City", "Edison"],
    "Illinois": ["Chicago", "Aurora", "Naperville"],
    "Washington": ["Seattle", "Bellevue", "Spokane"]
  },
  "United Kingdom": {
    "England": ["London", "Manchester", "Birmingham", "Leeds", "Liverpool", "Bristol"],
    "Scotland": ["Edinburgh", "Glasgow", "Aberdeen"],
    "Wales": ["Cardiff", "Swansea"],
    "Northern Ireland": ["Belfast", "Derry"]
  },
  "United Arab Emirates": {
    "Dubai": ["Dubai"],
    "Abu Dhabi": ["Abu Dhabi", "Al Ain"],
    "Sharjah": ["Sharjah"],
    "Ajman": ["Ajman"],
    "Ras Al Khaimah": ["Ras Al Khaimah"]
  },
  "Canada": {
    "Ontario": ["Toronto", "Ottawa", "Mississauga", "Hamilton"],
    "British Columbia": ["Vancouver", "Victoria", "Surrey"],
    "Quebec": ["Montreal", "Quebec City"],
    "Alberta": ["Calgary", "Edmonton"]
  },
  "Australia": {
    "New South Wales": ["Sydney", "Newcastle"],
    "Victoria": ["Melbourne", "Geelong"],
    "Queensland": ["Brisbane", "Gold Coast"],
    "Western Australia": ["Perth"]
  },
  "Singapore": {
    "Singapore": ["Singapore"]
  },
  "Nepal": {
    "Bagmati": ["Kathmandu", "Lalitpur", "Bhaktapur"],
    "Gandaki": ["Pokhara"],
    "Lumbini": ["Butwal", "Bhairahawa"]
  },
  "Germany": {
    "Bavaria": ["Munich", "Nuremberg"],
    "Berlin": ["Berlin"],
    "Hesse": ["Frankfurt", "Wiesbaden"],
    "Hamburg": ["Hamburg"]
  },
  "Saudi Arabia": {
    "Riyadh": ["Riyadh"],
    "Makkah": ["Jeddah", "Mecca", "Taif"],
    "Eastern Province": ["Dammam", "Khobar"]
  },
  "Qatar": {
    "Doha": ["Doha", "Al Rayyan"]
  }
};
