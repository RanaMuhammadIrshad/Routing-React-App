// import useParams hook
import { useParams } from 'react-router-dom';
// import getMember
import { getMember } from '../data';
const Member = () => {
  //  we useParams hook to get th memberId from the URL
  // useParams() returns an object with the URL parameters as keys and the corresponding segments of the URL as values.
  let params = useParams(); // {memberId:2}
  const { name, username, email, address } = getMember(
    parseInt(params.memberId, 10)
  );
  return (
    <main style={{ padding: '1rem' }}>
      <h2>{name}</h2>
      <p>UserName: {username}</p>
      <p>Email: {email}</p>
      <p>{address.street}</p>
    </main>
  );
};

export default Member;
