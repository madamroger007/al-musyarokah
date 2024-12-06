// Fungsi untuk fetch data dari API
export const getData = async (url: string) => {
    try {
        const response = await fetch(url, {
            headers: {
                accept: "application/json",
            },
            next: {
                revalidate: 60 * 60 * 12,
            }
        });

        if (!response.ok) {
            throw new Error(`Gagal mengambil data: ${response.status} ${response.statusText}`);
        }

        return (await response.json());
    } catch (error) {
        console.error("Gagal melakukan fetch data:", error);
        throw error;
    }
};

