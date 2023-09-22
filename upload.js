import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getStorage, ref, uploadBytesResumable } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-storage.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";




const firebaseConfig = {
    apiKey: "AIzaSyDPhTabB7gNHdutY6CH7F9CoC0lxQS7IHw",
    authDomain: "upload-de-imagens-396117.firebaseapp.com",
    projectId: "upload-de-imagens-396117",
    storageBucket: "upload-de-imagens-396117.appspot.com",
    messagingSenderId: "875602451810",
    appId: "1:875602451810:web:acbaab244dfa8bfecc603b"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const input = document.querySelector('input[type=file]');
const progressBar = document.querySelector('progress');
const Ceara = document.querySelector('#Ceara');
const Ambiental = document.querySelector('#Ambiental');
const Balsa = document.querySelector('#Balsa');
const Barracão = document.querySelector('#Barracão');
const Belem = document.querySelector('#Belem');
const Kalimento = document.querySelector('#Kalimento');
const uploadImage = document.querySelector('#uploadImage');
const checkbox = document.querySelector('input[type=checkbox]');
const percent = document.getElementById('percent');

let files = []; // Array para armazenar as imagens selecionadas pelo usuário

input.addEventListener('change', (e) => {
    files = e.target.files; // Atualiza a variável 'files' com as imagens selecionadas pelo usuário
});

uploadImage.addEventListener('click', () => {
    const email = "ismailearliene@gmail.com";
    const senha = "thomasmanoel@2020";
    let folderName = '';

    if (Ceara.checked) {
        folderName = Ceara.name;
    } else if (Ambiental.checked) {
        folderName = Ambiental.name;
    } else if (Balsa.checked) {
        folderName = Balsa.name;
    } else if (Barracão.checked) {
        folderName = Barracão.name;
    } else if (Belem.checked) {
        folderName = Belem.name;
    } else if (Kalimento.checked) {
        folderName = Kalimento.name;
    }

    const user = getAuth(); // Obtenha o objeto de autenticação

    signInWithEmailAndPassword(user, email, senha) // Autentique o usuário
        .then((userCredential) => {
            const user = userCredential.user;

            if (!user) {
                console.error("Usuário não autenticado.");
                return;
            }

            for (let i = 0; i < files.length; i++) {
                let file = files[i];
                const storageRef = ref(storage, `image/${folderName}/${file.name}`);
                const uploadTask = uploadBytesResumable(storageRef, file);

                uploadTask.on("state_changed",
                    (snapshot) => {
                        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        progressBar.value = progress;
                        percent.innerHTML = Math.round((progressBar.value / progressBar.max) * 100) + '%';
                    },
                    (error) => {
                        console.log(error);
                    },
                    () => {
                        input.value = '';
                        console.log("Upload concluído!");
                    }
                );
            }
        })
        .catch((error) => {
            console.error("Erro na autenticação:", error);
        });
});