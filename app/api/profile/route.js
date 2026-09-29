const user = {
    "name" : "ANNISAFAUZIAH PEBRIYANTI",
    "role" : "peserta bootcamp",
    "favoriteTech" : [
        "Next.js",
        "Tailwind CSS",
        "TypeScript"
    ]
};

export async function GET() {
    return Response.json(user);
};