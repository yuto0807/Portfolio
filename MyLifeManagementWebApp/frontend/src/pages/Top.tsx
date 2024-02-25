import {useNavigate} from "react-router-dom";

export default function Top() {
	const navigate = useNavigate();
	return (
		<div>
			<ul>
				<li onClick={() => navigate(`/money-management`)}>資産</li>
				<li onClick={() => navigate(`/time-management`)}>時間</li>
				<li onClick={() => navigate(`/work-experience-management`)}>職歴</li>
				<li onClick={() => navigate(`/skill-management`)}>技能</li>
			</ul>
		</div>
	);
}
