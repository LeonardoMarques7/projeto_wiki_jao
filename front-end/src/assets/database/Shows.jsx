// [
// 	{
// 		"data": "2025-05-12",
// 		"location": "Allianz Parque",
// 		"city": "São Paulo",
// 		"state": "SP"
// 	},
// 	{
// 		"data": "2025-05-18",
// 		"location": "Jeunesse Arena",
// 		"city": "Rio de Janeiro",
// 		"state": "RJ"
// 	},
// 	{
// 		"data": "2025-05-24",
// 		"location": "Mineirão",
// 		"city": "Belo Horizonte",
// 		"state": "MG"
// 	},
// 	{
// 		"data": "2025-05-31",
// 		"location": "Pedreira Paulo Leminski",
// 		"city": "Curitiba",
// 		"state": "PR"
// 	},
// 	{
// 		"data": "2025-06-07",
// 		"location": "Arena do Grêmio",
// 		"city": "Porto Alegre",
// 		"state": "RS"
// 	}
// ]

import { loadData } from "../../api/api.js";

export async function getShows() {
  const { showsArray } = await loadData();
  return showsArray;
}
