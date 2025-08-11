// // import { useState } from "react";
// // import {
// //   Pencil,
// //   Menu,
// //   Home,
// //   X
// // } from "lucide-react";
// // import { ModeToggle } from "@/components/mode-toggle";
// // import ProfileMenu from "@/components/profile-menu";

// // const menuItems = [
// //   { title: "Add Tasks", url: "add-task", icon: Home },

// // ];

// // export default function Dashboard({ children }) {
// //   const [sidebarOpen, setSidebarOpen] = useState(false);

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
// //       <div className="absolute inset-0 pointer-events-none">
// //         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
// //         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
// //         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse delay-500"></div>
// //       </div>

// //       <div className="flex">
// //         <div className="hidden lg:flex fixed inset-y-0 left-0 z-50 w-64 bg-white/80 dark:bg-gray-800/90 backdrop-blur-md shadow-xl">
// //           <div className="flex flex-col h-full w-full">
// //             <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-3 px-4 py-6">
// //                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
// //                   <Pencil className="w-4 h-4 text-white" />
// //                 </div>
// //               Admin Panel
// //             </div>
// //             <div className="px-2 space-y-3">
// //               {menuItems.map((item) => (
// //                 <a
// //                   key={item.title}
// //                   href={item.url}
// //                   className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 transition-all duration-300 hover:shadow-md border-0 hover:scale-105 transform"
// //                 >
// //                   <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
// //                     <item.icon size={16} className="text-blue-600 dark:text-blue-400 group-hover:text-purple-600 transition-colors duration-300" />
// //                   </div>
// //                   <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">{item.title}</span>
// //                 </a>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         <div className={`fixed inset-y-0 left-0 z-50 w-64 sm:w-72 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-xl transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
// //           <div className="flex flex-col h-full">
  
// //             <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-700">
// //               <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-3">
// //                 <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
// //                   <Pencil className="w-4 h-4 text-white" />
// //                 </div>
// //                 Admin Panel
// //               </div>
// //               <button
// //                 onClick={() => setSidebarOpen(false)}
// //                 className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors lg:hidden"
// //               >
// //                 <X size={20} className="text-gray-600 dark:text-gray-400" />
// //               </button>
// //             </div>

// //             <div className="px-3 py-4 space-y-2 flex-1 overflow-y-auto">
// //               {menuItems.map((item) => (
// //                 <a
// //                   key={item.title}
// //                   href={item.url}
// //                   onClick={() => setSidebarOpen(false)}
// //                   className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 transition-all duration-300 hover:shadow-md border-0"
// //                 >
// //                   <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
// //                     <item.icon size={16} className="text-blue-600 dark:text-blue-400 group-hover:text-purple-600 transition-colors duration-300" />
// //                   </div>
// //                   <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">{item.title}</span>
// //                 </a>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {sidebarOpen && (
// //           <div
// //             className="fixed inset-0 bg-black/50 z-40 lg:hidden"
// //             onClick={() => setSidebarOpen(false)}
// //           ></div>
// //         )}

       
// //         <div className={`flex-1 flex flex-col min-w-0 ${window.innerWidth >= 1024 ? 'lg:ml-64' : ''}`}>
    
// //           <div className="px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
// //             <div className="flex items-center gap-2 sm:gap-4">
// //               <button
// //                 onClick={() => setSidebarOpen(!sidebarOpen)}
// //                 className="p-2 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/50 dark:to-purple-900/50 hover:from-blue-100 hover:to-purple-100 border-0 transition-all duration-300 hover:shadow-md hover:scale-105 transform lg:hidden"
// //               >
// //                 <Menu size={18} className="text-blue-600 dark:text-blue-400" />
// //               </button>
// //               <div className="text-center">
// //                 <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
// //                   Task Manager
// //                 </h1>
// //               </div>
// //             </div>
// //             <div className="gap-2 sm:gap-3 flex items-center justify-center">
// //               <div className="p-1.5 sm:p-2 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/50 dark:to-purple-900/50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:shadow-md">
// //                 <ModeToggle />
// //               </div>
// //               <div className="rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/50 dark:to-purple-900/50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:shadow-md">
// //                 <ProfileMenu />
// //               </div>
// //             </div>
// //           </div>

         
// //           <div className="p-3 sm:p-4 lg:p-6 flex-1">
// //             <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl border-0 p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 min-h-[calc(100vh-120px)] sm:min-h-[calc(100vh-140px)]">
// //               <div className="text-gray-900 dark:text-gray-100 w-full overflow-hidden">
// //                 {children || (
// //                   <div className="space-y-4">
// //                     <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Welcome to Dashboard</h2>
                
// //                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
// //     <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer">
// //       <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
// //         Tasks
// //       </h3>
// //       <p className="text-blue-600 dark:text-blue-400 text-sm">
// //         Manage tasks records and information
// //       </p>
// //                       </div>
                      
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// import { useState } from "react";
// import {
//   CheckSquare,
//   Menu,
//   Plus,
//   List,
//   Calendar,
//   BarChart3,
//   Clock,
//   Target,
//   X
// } from "lucide-react";
// import { ModeToggle } from "@/components/mode-toggle";
// import ProfileMenu from "@/components/profile-menu";

// const menuItems = [
//   { title: "Add Task", url: "add-task", icon: Plus },
// ];

// export default function Dashboard({ children }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse delay-500"></div>
//       </div>

//       <div className="flex">
//         <div className="hidden lg:flex fixed inset-y-0 left-0 z-50 w-64 bg-white/80 dark:bg-gray-800/90 backdrop-blur-md shadow-xl">
//           <div className="flex flex-col h-full w-full">
//             <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-3 px-4 py-6">
//                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
//                   <CheckSquare className="w-4 h-4 text-white" />
//                 </div>
//               Task Manager
//             </div>
//             <div className="px-2 space-y-3">
//               {menuItems.map((item) => (
//                 <a
//                   key={item.title}
//                   href={item.url}
//                   className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 transition-all duration-300 hover:shadow-md border-0 hover:scale-105 transform"
//                 >
//                   <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
//                     <item.icon size={16} className="text-blue-600 dark:text-blue-400 group-hover:text-purple-600 transition-colors duration-300" />
//                   </div>
//                   <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">{item.title}</span>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className={`fixed inset-y-0 left-0 z-50 w-64 sm:w-72 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-xl transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
//           <div className="flex flex-col h-full">
  
//             <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-700">
//               <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-3">
//                 <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
//                   <CheckSquare className="w-4 h-4 text-white" />
//                 </div>
//                 Task Manager
//               </div>
//               <button
//                 onClick={() => setSidebarOpen(false)}
//                 className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors lg:hidden"
//               >
//                 <X size={20} className="text-gray-600 dark:text-gray-400" />
//               </button>
//             </div>

//             <div className="px-3 py-4 space-y-2 flex-1 overflow-y-auto">
//               {menuItems.map((item) => (
//                 <a
//                   key={item.title}
//                   href={item.url}
//                   onClick={() => setSidebarOpen(false)}
//                   className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 transition-all duration-300 hover:shadow-md border-0"
//                 >
//                   <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
//                     <item.icon size={16} className="text-blue-600 dark:text-blue-400 group-hover:text-purple-600 transition-colors duration-300" />
//                   </div>
//                   <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">{item.title}</span>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {sidebarOpen && (
//           <div
//             className="fixed inset-0 bg-black/50 z-40 lg:hidden"
//             onClick={() => setSidebarOpen(false)}
//           ></div>
//         )}

       
//         <div className={`flex-1 flex flex-col min-w-0 ${window.innerWidth >= 1024 ? 'lg:ml-64' : ''}`}>
    
//           <div className="px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
//             <div className="flex items-center gap-2 sm:gap-4">
//               <button
//                 onClick={() => setSidebarOpen(!sidebarOpen)}
//                 className="p-2 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/50 dark:to-purple-900/50 hover:from-blue-100 hover:to-purple-100 border-0 transition-all duration-300 hover:shadow-md hover:scale-105 transform lg:hidden"
//               >
//                 <Menu size={18} className="text-blue-600 dark:text-blue-400" />
//               </button>
//               <div className="text-center">
//                 <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                   My Tasks
//                 </h1>
//               </div>
//             </div>
//             <div className="gap-2 sm:gap-3 flex items-center justify-center">
//               <div className="p-1.5 sm:p-2 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/50 dark:to-purple-900/50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:shadow-md">
//                 <ModeToggle />
//               </div>
//               <div className="rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/50 dark:to-purple-900/50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:shadow-md">
//                 <ProfileMenu />
//               </div>
//             </div>
//           </div>

         
//           <div className="p-3 sm:p-4 lg:p-6 flex-1">
//             <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl border-0 p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 min-h-[calc(100vh-120px)] sm:min-h-[calc(100vh-140px)]">
//               <div className="text-gray-900 dark:text-gray-100 w-full overflow-hidden">
//                 {children || (
//                   <div className="space-y-6">
//                     <div className="text-center mb-8">
//                       <h2 className="text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                         Welcome to Your Task Manager
//                       </h2>
//                       <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
//                         Stay organized and productive by managing your tasks efficiently
//                       </p>
//                     </div>

           
//                     {/* Quick Actions */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
//                       <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer group">
//                         <div className="flex items-center gap-4 mb-3">
//                           <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
//                             <Plus size={24} className="text-white" />
//                           </div>
//                           <h3 className="font-semibold text-blue-800 dark:text-blue-300 text-lg">
//                             Create New Task
//                           </h3>
//                         </div>
//                         <p className="text-blue-600 dark:text-blue-400 text-sm">
//                           Add a new task with deadline and description to stay organized
//                         </p>
//                       </div>

          
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useState } from "react";
// import {
//   CheckSquare,
//   Menu,
//   Plus,
//   List,
//   Calendar,
//   BarChart3,
//   Clock,
//   Target,
//   X
// } from "lucide-react";
// import { ModeToggle } from "@/components/mode-toggle";
// import ProfileMenu from "@/components/profile-menu";

// const menuItems = [
//   { title: "Add Task", url: "add-task", icon: Plus },
// ];

// export default function Dashboard({ children }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse delay-500"></div>
//       </div>

//       <div className="flex">
//         <div className="hidden lg:flex fixed inset-y-0 left-0 z-50 w-64 bg-white/80 dark:bg-gray-800/90 backdrop-blur-md shadow-xl">
//           <div className="flex flex-col h-full w-full">
//             <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-3 px-4 py-6">
//                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
//                   <CheckSquare className="w-4 h-4 text-white" />
//                 </div>
//               Task Manager
//             </div>
//             <div className="px-2 space-y-3">
//               {menuItems.map((item) => (
//                 <a
//                   key={item.title}
//                   href={item.url}
//                   className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 transition-all duration-300 hover:shadow-md border-0 hover:scale-105 transform"
//                 >
//                   <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
//                     <item.icon size={16} className="text-blue-600 dark:text-blue-400 group-hover:text-purple-600 transition-colors duration-300" />
//                   </div>
//                   <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">{item.title}</span>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className={`fixed inset-y-0 left-0 z-50 w-64 sm:w-72 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-xl transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
//           <div className="flex flex-col h-full">
  
//             <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-700">
//               <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-3">
//                 <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
//                   <CheckSquare className="w-4 h-4 text-white" />
//                 </div>
//                 Task Manager
//               </div>
//               <button
//                 onClick={() => setSidebarOpen(false)}
//                 className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors lg:hidden"
//               >
//                 <X size={20} className="text-gray-600 dark:text-gray-400" />
//               </button>
//             </div>

//             <div className="px-3 py-4 space-y-2 flex-1 overflow-y-auto">
//               {menuItems.map((item) => (
//                 <a
//                   key={item.title}
//                   href={item.url}
//                   onClick={() => setSidebarOpen(false)}
//                   className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 transition-all duration-300 hover:shadow-md border-0"
//                 >
//                   <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
//                     <item.icon size={16} className="text-blue-600 dark:text-blue-400 group-hover:text-purple-600 transition-colors duration-300" />
//                   </div>
//                   <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">{item.title}</span>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {sidebarOpen && (
//           <div
//             className="fixed inset-0 bg-black/50 z-40 lg:hidden"
//             onClick={() => setSidebarOpen(false)}
//           ></div>
//         )}

       
//         <div className={`flex-1 flex flex-col min-w-0 ${window.innerWidth >= 1024 ? 'lg:ml-64' : ''}`}>
    
//           <div className="px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
//             <div className="flex items-center gap-2 sm:gap-4">
//               <button
//                 onClick={() => setSidebarOpen(!sidebarOpen)}
//                 className="p-2 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/50 dark:to-purple-900/50 hover:from-blue-100 hover:to-purple-100 border-0 transition-all duration-300 hover:shadow-md hover:scale-105 transform lg:hidden"
//               >
//                 <Menu size={18} className="text-blue-600 dark:text-blue-400" />
//               </button>
//               <div className="text-center">
//                 <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                   My Tasks
//                 </h1>
//               </div>
//             </div>
//             <div className="gap-2 sm:gap-3 flex items-center justify-center">
//               <div className="p-1.5 sm:p-2 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/50 dark:to-purple-900/50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:shadow-md">
//                 <ModeToggle />
//               </div>
//               <div className="rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/50 dark:to-purple-900/50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:shadow-md">
//                 <ProfileMenu />
//               </div>
//             </div>
//           </div>

         
//           <div className="p-3 sm:p-4 lg:p-6 flex-1">
//             <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl border-0 p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 min-h-[calc(100vh-120px)] sm:min-h-[calc(100vh-140px)]">
//               <div className="text-gray-900 dark:text-gray-100 w-full overflow-hidden">
//                 {children || (
//                   <div className="space-y-6">
//                     <div className="text-center mb-8">
//                       <h2 className="text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                         Welcome to Your Task Manager
//                       </h2>
//                       <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
//                         Stay organized and productive by managing your tasks efficiently
//                       </p>
//                     </div>

                   
//                     {/* Quick Actions */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
//                       <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer group">
//                         <div className="flex items-center gap-4 mb-3">
//                           <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
//                             <Plus size={24} className="text-white" />
//                           </div>
//                           <h3 className="font-semibold text-blue-800 dark:text-blue-300 text-lg">
//                             Create New Task
//                           </h3>
//                         </div>
//                         <p className="text-blue-600 dark:text-blue-400 text-sm">
//                           Add a new task with deadline and description to stay organized
//                         </p>
//                       </div>

                     
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import {
  CheckSquare,
  Menu,
  Plus,
  List,
  Calendar,
  BarChart3,
  Clock,
  Target,
  X
} from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import ProfileMenu from "@/components/profile-menu";

const menuItems = [
  { title: "Add Task", url: "add-task", icon: Plus },
];

export default function Dashboard({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse delay-500"></div>
      </div>

      <div className="flex">
        <div className="hidden lg:flex fixed inset-y-0 left-0 z-50 w-64 bg-white/80 dark:bg-gray-800/90 backdrop-blur-md shadow-xl">
          <div className="flex flex-col h-full w-full">
            <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-3 px-4 py-6">
               <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                  <CheckSquare className="w-4 h-4 text-white" />
                </div>
              Task Manager
            </div>
            <div className="px-2 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 transition-all duration-300 hover:shadow-md border-0 hover:scale-105 transform"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                    <item.icon size={16} className="text-blue-600 dark:text-blue-400 group-hover:text-purple-600 transition-colors duration-300" />
                  </div>
                  <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">{item.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={`fixed inset-y-0 left-0 z-50 w-64 sm:w-72 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-xl transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
          <div className="flex flex-col h-full">
  
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-700">
              <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                  <CheckSquare className="w-4 h-4 text-white" />
                </div>
                Task Manager
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors lg:hidden"
              >
                <X size={20} className="text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            <div className="px-3 py-4 space-y-2 flex-1 overflow-y-auto">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  onClick={() => setSidebarOpen(false)}
                  className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 transition-all duration-300 hover:shadow-md border-0"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                    <item.icon size={16} className="text-blue-600 dark:text-blue-400 group-hover:text-purple-600 transition-colors duration-300" />
                  </div>
                  <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">{item.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

       
        <div className="flex-1 flex flex-col min-w-0 lg:ml-64">
    
          <div className="px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/50 dark:to-purple-900/50 hover:from-blue-100 hover:to-purple-100 border-0 transition-all duration-300 hover:shadow-md hover:scale-105 transform lg:hidden"
              >
                <Menu size={18} className="text-blue-600 dark:text-blue-400" />
              </button>
              <div className="text-center">
                <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  My Tasks
                </h1>
              </div>
            </div>
            <div className="gap-2 sm:gap-3 flex items-center justify-center">
              <div className="p-1.5 sm:p-2 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/50 dark:to-purple-900/50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:shadow-md">
                <ModeToggle />
              </div>
              <div className="rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/50 dark:to-purple-900/50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:shadow-md">
                <ProfileMenu />
              </div>
            </div>
          </div>

         
          <div className="p-3 sm:p-4 lg:p-6 flex-1">
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl border-0 p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 min-h-[calc(100vh-120px)] sm:min-h-[calc(100vh-140px)]">
              <div className="text-gray-900 dark:text-gray-100 w-full overflow-hidden">
                {children || (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Welcome to Your Task Manager
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                        Stay organized and productive by managing your tasks efficiently
                      </p>
                    </div>

                   
                    {/* Quick Actions - Centered */}
                    <div className="flex justify-center mt-6">
                      <a 
                        href="add-task"
                        className="w-full max-w-md p-6 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer group block"
                      >
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Plus size={24} className="text-white" />
                          </div>
                          <h3 className="font-semibold text-blue-800 dark:text-blue-300 text-lg">
                            Create New Task
                          </h3>
                        </div>
                        <p className="text-blue-600 dark:text-blue-400 text-sm">
                          Add a new task with deadline and description to stay organized
                        </p>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}