# Usa un'immagine ufficiale di Node
FROM node:18

# Imposta la directory di lavoro nel container
WORKDIR /app

# Copia i file di configurazione delle dipendenze
COPY package*.json ./

# Installa le dipendenze
RUN npm install --legacy-peer-deps

# Copia tutto il resto dei file dell'app
COPY . .

# Espone la porta su cui React sarà in ascolto
EXPOSE 4500

# Avvia l'app React
CMD ["npm", "start"]
