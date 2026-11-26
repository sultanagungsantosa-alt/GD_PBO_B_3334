Kamera = {
    ambilFoto() {
        console.log(this.nama + " mengambil foto.");
    }
};

Internet = {
    bukaBrowser() {
        console.log(this.nama + " membuka browser.");
    }
};

Telepon = {
    panggil() {
        console.log(this.nama + " melakukan panggilan.");
    }
};

function applyCapabilities(Kelas, ...kemampuan) {
    Object.assign(Kelas.prototype, ...kemampuan);
}

class TabletWifi {
    constructor(nama) {
        this.nama = nama;
    }
}

class PonselJadul {
    constructor(nama) {
        this.nama = nama;
    }
}

applyCapabilities(TabletWifi, Kamera, Internet);
applyCapabilities(PonselJadul, Telepon);

const Tablet_3334 = new TabletWifi("Tablet_3334");
const Ponsel_3334 = new PonselJadul("Ponsel_3334");

Tablet_3334.ambilFoto();
Tablet_3334.bukaBrowser();
Ponsel_3334.panggil();

console.log(`${Ponsel_3334.nama} Bisa memanggil foto? ${typeof Ponsel_3334.ambilFoto === 'function' ? 'True' : 'False'}`);
console.log(`${Tablet_3334.nama} Bisa melakukan pemanggilan? ${typeof Tablet_3334.panggil === 'function' ? 'True' : 'False'}`);