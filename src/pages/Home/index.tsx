import {
	Avatar,
	Button,
	Container,
	Divider,
	Icon,
	Stack,
	Typography,
} from "@mui/material";
import React from "react";
import { programmingLanguageList } from "./list";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
	return (
		<>
			<Container maxWidth={"md"}>
				<div
					className="flex flex-col md:flex-row items-center gap-6 py-5"
					style={{ minHeight: "70vh" }}
				>
					<Avatar
						src="/favicon.svg"
						variant="square"
						sx={{
							width: "60vw",
							height: "60vw",
							maxHeight: "250px",
							maxWidth: "250px",
							my: 5,
						}}
					/>
					<div className="flex flex-col items-start">
						<Typography
							variant="h3"
							sx={{
								color: "secondary.light",
								width: "100%",
							}}
							className="text-center md:text-left"
						>
							Codebin
						</Typography>
						<Typography
							variant="h6"
							className="text-center md:text-left text-white"
						>
							Free Tool to Share Code or Script as You Want.
						</Typography>
					</div>
				</div>
				<Divider
					sx={{ my: 2, color: "#fff" }}
					light={true}
				>
					Create Bin
				</Divider>
				<Stack
					direction={"row"}
					flexWrap={"wrap"}
					rowGap={1}
					columnGap={1}
					alignItems={"center"}
					justifyContent={"center"}
				>
					{programmingLanguageList.map((pl) => (
						<Button
							variant="text"
							className="flex-col normal-case"
							component={Link}
							to={pl.lang ? `/create?lang=${pl.lang}` : `/create`}
						>
							<Icon className="h-fit text-5xl">{pl.icon}</Icon>
							<p>{pl.title}</p>
						</Button>
					))}
				</Stack>
				<Divider sx={{ my: 2 }} />
			</Container>
			<div className="text-center pb-4">
				<p className="text-slate-100">From</p>
				<Typography
					variant={"h5"}
					sx={{
						color: "secondary.light",
					}}
					component={"a"}
					href="https://github.com/tam11a"
					target={"_blank"}
				>
					Tam
				</Typography>
			</div>
		</>
	);
};

export default Home;
