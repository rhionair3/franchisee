export const getMasterGerobak = () => {
    return fetch('/api/gerobak', {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "brambang-access-token": sessionStorage.getItem("currentToken")

        }
    });
};

export const getMasterGerobakDetail = (value) => {
    return fetch('/api/gerobak/detail', {
        method: 'POST',
        body: JSON.stringify({
            id: value
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "brambang-access-token": sessionStorage.getItem("currentToken")

        }
    });
};

export const simpanDataGerobak = (dataSimpan) => {
    if (dataSimpan.id && (dataSimpan.id !== null || dataSimpan.id !== "")) {
        return fetch("/api/gerobak/ubah", {
            method: 'POST',
            body: JSON.stringify({
                id: dataSimpan.id,
                code: dataSimpan.code,
                name: dataSimpan.name,
                status: dataSimpan.status,
                isDeleted: dataSimpan.isDeleted,
                updatedBy: ''
                // updatedBy: sessionStorage.getItem("currentUser").id
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "brambang-access-token": sessionStorage.getItem("currentToken")

            }
        });
    } else {
        return fetch("/api/gerobak/tambah", {
            method: 'POST',
            body: JSON.stringify({
                id: dataSimpan.id,
                code: dataSimpan.code,
                name: dataSimpan.name,
                status: dataSimpan.status,
                isDeleted: dataSimpan.isDeleted,
                // createdBy: sessionStorage.getItem("currentUser").id
                createdBy: ''
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "brambang-access-token": sessionStorage.getItem("currentToken")

            }
        });
    }

};

export const setDeleteGerobak = (idGerobak) => {
    return fetch("/api/gerobak/hapus", {
        method: 'POST',
        body: JSON.stringify({
            id: idGerobak
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "brambang-access-token": sessionStorage.getItem("currentToken")

        }
    });

};