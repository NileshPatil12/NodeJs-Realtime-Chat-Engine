import { PrettyChatWindow } from 'react-chat-engine-pretty'


const ChatsPage=(props)=>{
    return (
        <div style={{height:'100vh'}}>
            <PrettyChatWindow
            projectId="fe689d00-6953-444e-8120-f4917878dcf9"
            username={props.user.username}
            secret={props.user.username}
            style={{ height: '100vh' }}
            />
        </div>
    )
}

export default ChatsPage