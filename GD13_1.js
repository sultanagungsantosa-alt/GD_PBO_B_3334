class Karyawan {
    constructor(nama) {
        this.nama = nama;
    }
    info() {
        console.log("Karyawan: " + this.nama);
    }
}

class KaryawanTetap extends Karyawan {
    hitungLembur(jam) {
        console.log(this.nama + " lembur " + jam + " jam, upah Rp" + (jam * 50000) + "-");
    }
}

class KaryawanMagang extends Karyawan {
    terimaUangSaku(nominal) {
        console.log(this.nama + " menerima uang saku Rp" + nominal + "-");
    }
}

class Programmer extends KaryawanTetap {}

class Desainer extends KaryawanTetap {}

class Magang extends KaryawanMagang {}

function prosesLembur(daftar) {
    daftar.forEach((x) => x.hitungLembur(3));
}

function berikanUangSaku(daftar) {
    daftar.forEach((x) => x.terimaUangSaku(1500000));
}

const budi = new Programmer("Budi_3334");
const rina = new Magang("Rina_3334");
const sari = new Desainer("Sari_3334");

budi.info();
rina.info();
sari.info();

prosesLembur([budi, sari]);
berikanUangSaku([rina]);