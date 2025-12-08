import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard, BookOpen, Video, FileText, MessageSquare,
    Settings, Bell, Search, Menu, LogOut, Award,
    Users, CreditCard, TrendingUp, MessageCircle, AlertCircle, User, ChevronUp, ClipboardCheck
} from 'lucide-react';
import BottomNav from './BottomNav';
import NotificationPanel from './NotificationPanel';
import { BRAND } from '../../branding';

const SidebarItem = ({ icon: Icon, label, to, active, collapsed }) => (
    <Link
        to={to}
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: collapsed ? 'center' : 'flex-start',
            padding: '0.75rem 1rem',
            borderRadius: '12px',
            textDecoration: 'none',
            color: active ? 'white' : 'var(--color-text-light)',
            background: active ? 'var(--gradient-primary)' : 'transparent',
            marginBottom: '0.5rem',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            overflow: 'hidden',
            height: '48px'
        }}
    >
        <Icon size={20} style={{ minWidth: '20px' }} />
        <span style={{
            fontWeight: '500',
            marginLeft: '0.75rem',
            opacity: collapsed ? 0 : 1,
            width: collapsed ? 0 : 'auto',
            whiteSpace: 'nowrap',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            overflow: 'hidden'
        }}>
            {label}
        </span>
        {!collapsed && active && (
            <div style={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                width: '4px',
                height: '20px',
                background: 'white',
                borderRadius: '4px 0 0 4px',
                opacity: 0.5
            }} />
        )}
    </Link>
);

const DashboardLayout = ({ children, role = 'student' }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [showNotifications, setShowNotifications] = useState(false);
    const [selectedChild, setSelectedChild] = useState(0);
    const [showChildSelector, setShowChildSelector] = useState(false);
    const location = useLocation();

    const myChildren = [
        { name: 'Rahul Sharma', class: 'Class 10-A', img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
        { name: 'Riya Sharma', class: 'Class 6-B', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' }
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth < 1024) {
                setSidebarOpen(false);
            } else {
                setSidebarOpen(true);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const studentMenuItems = [
        { icon: LayoutDashboard, label: 'My Classes', to: '/student/dashboard' },
        { icon: BookOpen, label: 'Learning Hub', to: '/student/materials' },
        { icon: ClipboardCheck, label: 'Assessment', to: '/student/tests' },
        { icon: MessageSquare, label: 'Communication', to: '/student/communication' },
        { icon: Menu, label: 'More', to: '/student/profile' },
    ];

    const parentMenuItems = [
        { icon: LayoutDashboard, label: 'Home', to: '/parent/dashboard' },
        { icon: TrendingUp, label: 'Performance', to: '/parent/performance' },
        { icon: MessageCircle, label: 'Communication', to: '/parent/communication' },
        { icon: User, label: 'Profile', to: '/parent/profile' },
    ];

    const teacherMenuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', to: '/teacher/dashboard' },
        { icon: BookOpen, label: 'Assignment', to: '/teacher/assignments' },
        { icon: ClipboardCheck, label: 'Assessment', to: '/teacher/assessment' },
        { icon: MessageSquare, label: 'Communication', to: '/teacher/communication' },
        { icon: Menu, label: 'More', to: '/teacher/more' },
    ];

    const adminMenuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', to: '/admin/dashboard' },
        { icon: MessageSquare, label: 'Communication', to: '/admin/communication' },
        { icon: Users, label: 'Management', to: '/admin/users' },
        { icon: CreditCard, label: 'Finance', to: '/admin/finance' },
        { icon: Search, label: 'Analysis', to: '/admin/settings' },
        { icon: AlertCircle, label: 'More', to: '/admin/reports' },
    ];

    let menuItems;
    if (role === 'parent') menuItems = parentMenuItems;
    else if (role === 'teacher') menuItems = teacherMenuItems;
    else if (role === 'admin') menuItems = adminMenuItems;
    else menuItems = studentMenuItems;

    let profileName, profileRole, profileImage;
    if (role === 'parent') {
        profileName = 'Mr. Sharma';
        profileRole = 'Parent';
        profileImage = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80";
    } else if (role === 'teacher') {
        profileName = 'Mr. Verma';
        profileRole = 'Physics Teacher';
        profileImage = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80";
    } else if (role === 'admin') {
        profileName = 'Admin User';
        profileRole = 'Super Admin';
        profileImage = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"; // Reusing parent image for now or use a generic one
    } else {
        profileName = 'Rahul Sharma';
        profileRole = 'Class 10-A';
        profileImage = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80";
    }

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#f3f4f6', paddingBottom: isMobile ? '80px' : '0' }}>
            {/* Sidebar - Hidden on Mobile */}
            {!isMobile && (
                <aside style={{
                    width: isSidebarOpen ? '260px' : '80px',
                    background: 'white',
                    borderRight: '1px solid rgba(0,0,0,0.05)',
                    padding: isSidebarOpen ? '1.5rem' : '1.5rem 0.75rem', // Reduce padding when collapsed
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'fixed',
                    height: '100vh',
                    zIndex: 50,
                    overflow: 'visible', // Changed to visible for dropdown
                    whiteSpace: 'nowrap'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        marginBottom: '3rem',
                        overflow: 'hidden',
                        justifyContent: isSidebarOpen ? 'flex-start' : 'center'
                    }}>
                        <div style={{
                            minWidth: '40px', height: '40px',
                            background: 'var(--gradient-primary)',
                            borderRadius: '10px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: 'white', fontWeight: 'bold', fontSize: '1.5rem',
                            boxShadow: '0 4px 10px rgba(37, 99, 235, 0.2)'
                        }}><BookOpen size={24} /></div>
                        <span style={{
                            fontSize: '1.25rem',
                            fontWeight: 'bold',
                            color: 'var(--color-primary-blue)',
                            whiteSpace: 'nowrap',
                            opacity: isSidebarOpen ? 1 : 0,
                            width: isSidebarOpen ? 'auto' : 0,
                            transition: 'all 0.3s ease'
                        }}>
                            {BRAND.name}
                        </span>
                    </div>

                    <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        {menuItems.map((item) => (
                            <SidebarItem
                                key={item.to}
                                {...item}
                                active={location.pathname === item.to}
                                collapsed={!isSidebarOpen}
                            />
                        ))}
                    </nav>

                    <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>

                        {/* Child Selector for Parents */}
                        {role === 'parent' && (
                            <div style={{ position: 'relative', marginBottom: '0.5rem' }}>
                                <button
                                    onClick={() => isSidebarOpen && setShowChildSelector(!showChildSelector)}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '0.75rem',
                                        width: '100%', padding: '0.75rem 1rem',
                                        background: showChildSelector ? 'var(--color-primary-blue)' : 'transparent',
                                        color: showChildSelector ? 'white' : 'var(--color-text-light)',
                                        border: 'none', borderRadius: '12px', cursor: isSidebarOpen ? 'pointer' : 'default',
                                        transition: 'all 0.2s',
                                        justifyContent: !isSidebarOpen ? 'center' : 'flex-start'
                                    }}
                                >
                                    <img
                                        src={myChildren[selectedChild].img}
                                        alt="Child"
                                        style={{ width: '24px', height: '24px', borderRadius: '50%', border: '2px solid white', minWidth: '24px' }}
                                    />
                                    {isSidebarOpen && (
                                        <>
                                            <div style={{ flex: 1, textAlign: 'left', overflow: 'hidden' }}>
                                                <p style={{ fontSize: '0.85rem', fontWeight: '600', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{myChildren[selectedChild].name}</p>
                                                <p style={{ fontSize: '0.7rem', opacity: 0.8 }}>{myChildren[selectedChild].class}</p>
                                            </div>
                                            <ChevronUp size={16} style={{ transform: showChildSelector ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                                        </>
                                    )}
                                </button>

                                {/* Dropdown */}
                                {showChildSelector && isSidebarOpen && (
                                    <div className="animate-fade-in" style={{
                                        position: 'absolute', bottom: '100%', left: '0', right: '0',
                                        background: 'white', borderRadius: '12px',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                        padding: '0.5rem', marginBottom: '0.5rem',
                                        border: '1px solid #e5e7eb',
                                        zIndex: 100
                                    }}>
                                        {myChildren.map((child, index) => (
                                            <button
                                                key={index}
                                                onClick={() => { setSelectedChild(index); setShowChildSelector(false); }}
                                                style={{
                                                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                                                    width: '100%', padding: '0.5rem',
                                                    background: selectedChild === index ? '#eff6ff' : 'transparent',
                                                    border: 'none', borderRadius: '8px', cursor: 'pointer',
                                                    marginBottom: '0.25rem'
                                                }}
                                            >
                                                <img src={child.img} alt={child.name} style={{ width: '24px', height: '24px', borderRadius: '50%' }} />
                                                <div style={{ textAlign: 'left' }}>
                                                    <p style={{ fontSize: '0.85rem', fontWeight: '600', color: '#374151' }}>{child.name}</p>
                                                    <p style={{ fontSize: '0.7rem', color: '#6b7280' }}>{child.class}</p>
                                                </div>
                                                {selectedChild === index && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary-blue)', marginLeft: 'auto' }} />}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        <SidebarItem icon={LogOut} label="Logout" to="/login" collapsed={!isSidebarOpen} />
                    </div>
                </aside>
            )}

            {/* Main Content */}
            <main style={{
                flex: 1,
                marginLeft: !isMobile && isSidebarOpen ? '260px' : (!isMobile ? '80px' : '0'),
                transition: 'margin-left 0.3s ease',
                minHeight: '100vh'
            }}>
                {/* Top Navigation Bar - Hidden for specific routes like Communication */}
                {location.pathname !== '/parent/communication' && (
                    <header style={{
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        padding: '1rem 2rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        position: 'sticky',
                        top: 0,
                        zIndex: 40,
                        borderBottom: '1px solid rgba(0,0,0,0.05)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            {!isMobile && (
                                <button
                                    onClick={() => setSidebarOpen(!isSidebarOpen)}
                                    style={{ background: 'none', border: 'none', color: 'var(--color-text-light)' }}
                                >
                                    <Menu size={24} />
                                </button>
                            )}

                            {/* Mobile Header Title */}
                            {isMobile && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <div style={{ width: '32px', height: '32px', background: 'var(--gradient-primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}><BookOpen size={20} /></div>
                                    <span style={{ fontWeight: 'bold', fontSize: '1.1rem', color: 'var(--color-primary-blue)' }}>{BRAND.name}</span>
                                </div>
                            )}

                            {!isMobile && (
                                <div style={{ position: 'relative' }}>
                                    <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-light)' }} />
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        style={{
                                            padding: '0.6rem 1rem 0.6rem 2.5rem',
                                            borderRadius: '20px',
                                            border: '1px solid rgba(0,0,0,0.1)',
                                            background: '#f9fafb',
                                            width: '300px',
                                            outline: 'none'
                                        }}
                                    />
                                </div>
                            )}
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>


                            <div
                                style={{ position: 'relative', cursor: 'pointer', marginRight: '0.5rem' }}
                                onClick={() => setShowNotifications(!showNotifications)}
                            >
                                <Bell size={28} color="#4b5563" />
                                <span style={{
                                    position: 'absolute', top: '1px', right: '2px',
                                    width: '10px', height: '10px',
                                    background: '#ef4444', borderRadius: '50%', border: '2px solid white'
                                }}></span>
                            </div>

                            {/* Notification Panel */}
                            <NotificationPanel
                                isOpen={showNotifications}
                                onClose={() => setShowNotifications(false)}
                                role={role}
                            />
                        </div>
                    </header>
                )}

                <div style={{ padding: isMobile ? '1rem' : '2rem' }}>
                    {children}
                </div>
            </main>

            {/* Bottom Navigation - Visible only on Mobile */}
            {isMobile && <BottomNav navItems={menuItems} />}
        </div>
    );
};

export default DashboardLayout;
