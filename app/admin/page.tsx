export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-brand-black p-6 rounded-2xl border border-white/5 shadow-xl">
          <h3 className="text-white/50 text-sm font-medium mb-2 uppercase tracking-wider">Total Brands</h3>
          <p className="text-4xl font-black text-brand-yellow">5</p>
        </div>
        
        <div className="bg-brand-black p-6 rounded-2xl border border-white/5 shadow-xl">
          <h3 className="text-white/50 text-sm font-medium mb-2 uppercase tracking-wider">Total Categories</h3>
          <p className="text-4xl font-black text-white">12</p>
        </div>
        
        <div className="bg-brand-black p-6 rounded-2xl border border-white/5 shadow-xl">
          <h3 className="text-white/50 text-sm font-medium mb-2 uppercase tracking-wider">Tire Families</h3>
          <p className="text-4xl font-black text-white">8</p>
        </div>
        
        <div className="bg-brand-black p-6 rounded-2xl border border-white/5 shadow-xl">
          <h3 className="text-white/50 text-sm font-medium mb-2 uppercase tracking-wider">Total Products</h3>
          <p className="text-4xl font-black text-brand-yellow">45</p>
        </div>
      </div>

      <div className="mt-12 bg-brand-black p-8 rounded-2xl border border-white/5 shadow-xl">
        <h2 className="text-xl font-bold text-white mb-4">Welcome to Admin Panel</h2>
        <p className="text-white/60 leading-relaxed">
          From here you can manage all the content on the J. Rashid & Sons website. Use the sidebar to navigate between different sections. 
          Currently, the system is running in "Local Mode" using local JSON data. When deployed, this will be connected to the live MySQL database.
        </p>
      </div>
    </div>
  );
}
