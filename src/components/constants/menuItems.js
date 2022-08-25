 import {PieChartOutlined, BarChartOutlined ,UserOutlined,TableOutlined,EditOutlined} from "@ant-design/icons"
import User from "../tabs/User"


 const listMenu =[
    {   
        icon: <PieChartOutlined />,
        label:"dashboard",
        path:"/home",
        component: ()=><></>
        
    },
    {
        icon: <BarChartOutlined />,
        label:"charts",
        path:"/chart",
        component: ()=><></>,
    },
    {
        icon: <UserOutlined />,
        label:"users",
        path:"/user",
        component: () =><User/>,
    },
    {
        icon:<TableOutlined />,
        label:"Tables",
        path:"/tables",
        component:"moi",
    },
    {
        icon:<EditOutlined />,
        label:"Elements",
        path:"/elements",
        component:"moi",
    },
]
export {listMenu}
