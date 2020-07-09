const og = require('open-graph');

export default async (req, res) => {
    return new Promise(resolve => {
        const { url } = JSON.parse(req.body)

        og(url, function (err, meta) {
            if (meta.title) {
                res.status(200).end(JSON.stringify({ title: meta.title }))
            } else {
                res.status(200).end(JSON.stringify({ title: null }))
            }
        })

        return resolve()
    })
}