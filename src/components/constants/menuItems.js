 import {PieChartOutlined, BarChartOutlined ,UserOutlined,TableOutlined,EditOutlined} from "@ant-design/icons"
import User from "../tabs/User"
import Chart from "../tabs/Chart"


 const listMenu =[
    {   
        icon: <PieChartOutlined />,
        label:"dashboard",
        path:"/main/home",
        component: ()=><>Dashbord</>
        
    },
    {
        icon: <BarChartOutlined />,
        label:"Charts",
        path:"/main/chart",
        component: Chart
    },
    {
        icon: <UserOutlined />,
        label:"users",
        path:"/main/users",
        component: User
    },
    {
        icon:<TableOutlined />,
        label:"Tables",
        path:"/main/tables",
        component:()=><>Tables</>
    },
    {
        icon:<EditOutlined />,
        label:"Elements",
        path:"/main/elements",
        component:()=><>Elements</>
    },
]
export {listMenu}
