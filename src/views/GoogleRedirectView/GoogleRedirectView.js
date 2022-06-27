// import React, { useEffect } from 'react';
// import { useNavigate, useLocation} from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import operations  from '../../redux/asyncThunks';

// function GoogleRedirectView() {
//   const location = useLocation();
//   const navigate = useNavigate;
//   const dispatch = useDispatch();

//   const googleURLToken = new URLSearchParams(location.search);

//   useEffect(() => {
//     console.log(location.search);
//     dispatch(operations.googleLogin(googleURLToken));
//     navigate('/login');
//   }, [dispatch, location, navigate]);

//   return (
//     <div >
//       <h2 >Please wait a second...</h2>
//       <p >You will be connected very soon.</p>
//     </div>
//   );
// }

// export default GoogleRedirectView;
