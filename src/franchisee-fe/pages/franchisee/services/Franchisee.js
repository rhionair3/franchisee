export const franchiseeList = () => {
    return fetch('/api/franchisee', {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            // "brambang-access-token": sessionStorage.getItem("currentToken")

        }
    });
}

export const franchiseeDetail = (franchiseeId) => {
    return fetch('/api/franchisee/detail', {
        method: 'POST',
        body: JSON.stringify({
            id: franchiseeId
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            // "brambang-access-token": sessionStorage.getItem("currentToken")

        }
    });
}

export const franchiseeSimpan = (data) => {
    if(data.id && (data.id !== null || data.id !== "")) {
        return fetch('/api/franchisee/ubah', {
            method: 'POST',
            body: JSON.stringify({data}),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                // "brambang-access-token": sessionStorage.getItem("currentToken")
    
            }
        });
    } else {
        return fetch('/api/franchisee/tambah', {
            method: 'POST',
            body: JSON.stringify({data}),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                // "brambang-access-token": sessionStorage.getItem("currentToken")
    
            }
        });
    }
}

export const franchiseeHapus = (franchiseeId) => {
    return fetch('/api/franchisee/hapus', {
        method: 'POST',
        body: {
            id: franchiseeId
        },
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            // "brambang-access-token": sessionStorage.getItem("currentToken")

        }
    });
}

export const gerobakDetail = (gerobakId) => {
    return fetch('/api/franchisse/gerobak/detail', {
        method: 'POST',
        body: {
            id: gerobakId
        },
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            // "brambang-access-token": sessionStorage.getItem("currentToken")

        }
    });
}

export const gerobakSimpan = (data) => {
    if(data.id && (data.id !== null || data.id !== "")) {
        return fetch('/api/franchisse/gerobak/ubah', {
            method: 'POST',
            body: data,
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                // "brambang-access-token": sessionStorage.getItem("currentToken")
    
            }
        });
    } else {
        return fetch('/api/franchisse/gerobak/tambah', {
            method: 'POST',
            body: data,
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                // "brambang-access-token": sessionStorage.getItem("currentToken")
    
            }
        });
    }
}

export const transaksiTambah = (data) => {

}

export const gerobakHapus = (gerobakId) => {
    return fetch('/api/franchisse/gerobak/hapus', {
        method: 'POST',
        body: {
            id: gerobakId
        },
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            // "brambang-access-token": sessionStorage.getItem("currentToken")

        }
    });
}

export const kokiDetail = (kokiId) => {
    return fetch('/api/franchisse/koki/detail', {
        method: 'POST',
        body: {
            id: kokiId
        },
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            // "brambang-access-token": sessionStorage.getItem("currentToken")

        }
    });
}

export const kokiSimpan = (data) => {
    if(data.id && (data.id !== null || data.id !== "")) {
        return fetch('/api/franchisse/koki/ubah', {
            method: 'POST',
            body: data,
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                // "brambang-access-token": sessionStorage.getItem("currentToken")
    
            }
        });
    } else {
        return fetch('/api/franchisse/koki/tambah', {
            method: 'POST',
            body: data,
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                // "brambang-access-token": sessionStorage.getItem("currentToken")
    
            }
        });
    }
}

export const kokiHapus = (kokiId) => {
    return fetch('/api/franchisse/koki/hapus', {
        method: 'POST',
        body: {
            id: kokiId
        },
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            // "brambang-access-token": sessionStorage.getItem("currentToken")

        }
    });
}