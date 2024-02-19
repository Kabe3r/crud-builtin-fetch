
export default function layout({
    login,
    revenue,
    users,
    children,
}: {
    login: React.ReactNode;
    revenue: React.ReactNode;
    users: React.ReactNode;
    children: React.ReactNode
}) {
    const role: string = 'admin' || 'user'  ;
  return (
    <div className="text-2xl text-center mt-10 capitalize">
        <h1>Dashboard Page</h1>
        {role == 'admin' ? (
            <>
            <h2>{login}</h2>
            <h3>{revenue}</h3>
            <h4>{users}</h4>
            </>
            ) : (   
                <h2>{login}</h2>
            )
        }
        {children}
    </div>
  )
}
