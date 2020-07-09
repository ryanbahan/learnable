const og = require('open-graph');

export default async (req, res) => {
    const { url } = JSON.parse(req.body)

    og(url, function (err, meta) {
        console.log(meta.title)
    })

    res.status(200).json(req.body)


    // res.end("test")
    // return new Promise(resolve => {
    //     og(url, function (err, meta) {
    //         if (meta) {
    //             res.end(meta.title)
    //         } else {
    //             res.end(null)
    //         }
    //     })

    //     return resolve()
    // })
}

// export default async function (req: NextApiRequest, res: NextApiResponse) {
//     return new Promise(resolve => {
//         switch (req.method) {
//             case "POST":
//             case "OPTION": {
//                 try {
//                     const request = http.request( // Node core http module
//                         url,
//                         {
//                             headers: await makeHeaders(req, res),
//                             method: req.method,
//                         },
//                         response => {
//                             response.pipe(res);
//                             resolve()
//                         },
//                     );

//                     request.write(JSON.stringify(req.body));
//                     request.end();
//                 } catch (error) {
//                     Log.error(error); // Can be a simple console.error too
//                     res.status(500).end();
//                     return resolve()
//                 }
//             }
//         }
//         res.status(405).end();
//         return resolve()
//     })
// }