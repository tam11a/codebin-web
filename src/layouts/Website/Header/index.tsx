import {
	AppBar,
	Avatar,
	Box,
	Container,
	ListItemText,
	Toolbar,
} from "@mui/material";
import React from "react";
import { Routes, Route } from "react-router-dom";

const WebsiteHeader: React.FC = () => {
	return (
		<>
			<Routes>
				<Route
					path=""
					element={<></>}
				/>
				<Route
					path="*"
					element={
						<>
							<AppBar>
								<Toolbar sx={{ bgcolor: "background.paper" }}>
									<Container
										maxWidth={"lg"}
										className="flex flex-row items-center"
									>
										<Avatar
											src="/favicon.svg"
											variant="square"
										/>
										<ListItemText
											primary={"CodeBin"}
											secondary={"Share Code as You Want"}
											className="ml-4"
											primaryTypographyProps={{
												sx: {
													color: "secondary.light",
													fontWeight: "bold",
													textTransform: "uppercase",
													letterSpacing: 2,
												},
											}}
											secondaryTypographyProps={{
												sx: { color: "#ffffff99", fontWeight: "light" },
											}}
										/>
									</Container>
								</Toolbar>
							</AppBar>
							<Box height={"68px"} />
						</>
					}
				/>
			</Routes>
		</>
	);
};

export default WebsiteHeader;
