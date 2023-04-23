import TextButton from "components/general/TextButton";
import { useNavigate } from "react-router-dom";

// The component is loaded if the user is logged in
const HelloUser = ({ userName }: { userName: string }) => {
  const navigate = useNavigate();

  return (
    <div className="flex
                    flex-col
                    gap-12
                    justify-center
                    items-center">
        <div className="text-5xl
                        text-secondary-content">
            Welcome back, {userName}.
        </div>
        <TextButton textContent={'Procceed'}
                    classes="bg-primary
                             hover:bg-primary-focus"
                    onClickListener={navigate.bind(null, '/home')}/>
    </div>
  )
};

export default HelloUser;