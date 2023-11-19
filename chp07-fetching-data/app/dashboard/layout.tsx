import SideNav from '@/app/ui/dashboard/sidenav';
import NavLinks from './nav-links';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-72 bg-slate-200">
        <h1 className='text-[20px] p-2 text-center md:text-left font-bold mt-8 text-sky-500'>Using &lt;Link&gt; element 👇</h1>
        <NavLinks />
        <h1 className='text-[20px] p-2 text-center md:text-left font-bold mt-8 text-sky-500'>Using &lt;a&gt; element 👇</h1>
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        <div className='w-fit flex flex-col font-bold text-slate-700 mb-6 bg-slate-200 p-4 rounded-lg'>
          <h1>Instructions</h1>
          <small>Using &lt;Link&gt; - Navigation is optimized, since it is without full refresh</small>
          <small>Using &lt;a&gt; - There&apos;s a full page refresh on each page navigation!</small>
        </div>
        {children}
      </div>
    </div>
  );
}