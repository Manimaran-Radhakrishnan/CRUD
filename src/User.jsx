import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";

import { useNavigate } from "react-router";

export function User({ user, id }) {
  const navigate = useNavigate();
  return (
    <Card className="user">
      <img className="image" src={user.image} />
      <CardContent>
        <div className="name">
          <p>
            NAME : <span className="span">{user.name}</span>
          </p>
          <p>
            AGE : <span className="span">{user.age}</span>
          </p>
        </div>
        <div className="name">
          <p>
            WORK : <span className="span">{user.work}</span>
          </p>
          <IconButton
            color="primary"
            onClick={() => navigate(`/userlist/${id}`)}
          >
            <InfoIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
}
