import { useParams } from 'react-router-dom'

function User() {
    const {userId}=useParams(); // use same param as in Route i.e {userId}
  return (
    <div>User : {userId}</div>
  )
}

export default User