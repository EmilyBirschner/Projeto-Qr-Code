document.addEventListener('DOMContentLoaded', () => {

    const linkInput = document.getElementById('link-input');
    const gerarBtn = document.getElementById('gerar-btn');
    const qrcodeContainer = document.getElementById('qrcode-container');
    const downloadButtons = document.getElementById('download-buttons');
    const downloadJpgBtn = document.getElementById('download-jpg-btn');
    const downloadPdfBtn = document.getElementById('download-pdf-btn');
    const mensagemErro = document.getElementById('mensagem-erro');
    const refreshBtn = document.getElementById('refresh-btn');

    let qrCode = null;
    let erroTimeout = null;

    // Função para resetar a aplicação ao estado inicial
    function resetarAplicacao() {
        linkInput.value = '';
        qrcodeContainer.innerHTML = '';
        qrcodeContainer.classList.remove('visivel'); 
        downloadButtons.style.display = 'none';
        mensagemErro.classList.remove('visivel');
        clearTimeout(erroTimeout);
    }

    // Função principal para gerar o QR Code
    function gerarQRCode() {
        mensagemErro.classList.remove('visivel');
        clearTimeout(erroTimeout);

        const texto = linkInput.value.trim();

        if (!texto) {
            mensagemErro.textContent = "Por favor, insira um texto ou link.";
            mensagemErro.classList.add('visivel');
            
            qrcodeContainer.innerHTML = ''; 
            qrcodeContainer.classList.remove('visivel'); 
            downloadButtons.style.display = 'none';

            erroTimeout = setTimeout(() => {
                mensagemErro.classList.remove('visivel');
            }, 3000);
            return;
        }

        qrcodeContainer.innerHTML = "";
        qrCode = new QRCode(qrcodeContainer, {
            text: texto,
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
        qrcodeContainer.classList.add('visivel'); 

        setTimeout(() => {
            downloadButtons.style.display = 'flex';
        }, 300);
    }

    // --- EVENT LISTENERS ---
    refreshBtn.addEventListener('click', resetarAplicacao);
    gerarBtn.addEventListener('click', gerarQRCode);

    downloadJpgBtn.addEventListener('click', () => {
        const canvas = qrcodeContainer.querySelector('canvas');
        if (!canvas) return;
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg');
        link.download = 'qrcode.jpg';
        link.click();
    });

    downloadPdfBtn.addEventListener('click', () => {
        const canvas = qrcodeContainer.querySelector('canvas');
        if (!canvas) return;
        
        const { jsPDF } = window.jspdf;
        const imageData = canvas.toDataURL('image/jpeg');
        const doc = new jsPDF();
        
        doc.addImage(imageData, 'JPEG', 15, 40, 50, 50);
        doc.save('qrcode.pdf');
    });

    resetarAplicacao();
});