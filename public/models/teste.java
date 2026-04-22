public class CanalUDP implements CanalComunicacao {
    @Override
    public void configurar(String parametros) {
        System.out.println("Configurando Canal UDP com: " + parametros);

    }
    
    @Override
    public void enviarDados(String dados) {
        System.out.println("Enviando dados via UDP: " + dados);
        
    }
}

public class CanalTCP implements CanalComunicacao {
    @Override
    public void configurar(String parametros) {
        System.out.println("Configurando Canal TCP com: " + parametros);
        // Configuração TCP
    }
    
    @Override
    public void enviarDados(String dados) {
        System.out.println("Enviando dados via TCP: " + dados);
        // Lógica TCP
    }
}

public class CanalHTTP implements CanalComunicacao {
    @Override
    public void configurar(String parametros) {
        System.out.println("Configurando Canal HTTP com: " + parametros);
        // Configuração HTTP
    }
    
    @Override
    public void enviarDados(String dados) {
        System.out.println("Enviando dados via HTTP: " + dados);
        // Lógica HTTP
    }
}

public class CanalSMTP implements CanalComunicacao {
    @Override
    public void configurar(String parametros) {
        System.out.println("Configurando Canal SMTP com: " + parametros);
        // Configuração SMTP
    }
    
    @Override
    public void enviarDados(String dados) {
        System.out.println("Enviando dados via SMTP: " + dados);
        // Lógica SMTP
    }
}
