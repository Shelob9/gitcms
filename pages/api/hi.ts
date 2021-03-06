import { NextApiResponse, NextApiRequest } from "next";
import applicationFactory from "../../src/lib/applicationFactory";
//Says Hi to Roy
export default async (req: NextApiRequest, res: NextApiResponse) => {
	let app = await applicationFactory(undefined, undefined);

	switch (req.method) {
		case "GET": {
			res.setHeader("Content-Type", "application/json");
			res.setHeader("Cache-Control", "s-maxage=360");
			res.status(200).json({ hi: "Roy", useGit: app.useGit });
			break;
		}
		default:
			res.status(405).json({ error: "Not implimented" });
			break;
	}
};
