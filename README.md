package controledefluxo;

	public class Contador {
	    public static void main(String[] args) {
	        try {
	            // Verifica se foram passados dois argumentos
	            if (args.length != 2) {
	                throw new IllegalArgumentException("É necessário passar dois parâmetros inteiros.");
	            }

	            // Converte os argumentos para inteiros
	            int parametro1 = Integer.parseInt(args[0]);
	            int parametro2 = Integer.parseInt(args[1]);

	            // Verifica se o primeiro parâmetro é maior que o segundo
	            if (parametro1 > parametro2) {
	                throw new ParametrosInvalidosException("O segundo parâmetro deve ser maior que o primeiro.");
	            }

	            // Realiza a contagem e imprime os números
	            for (int i = 1; i <= (parametro2 - parametro1); i++) {
	                System.out.println("Imprimindo o número " + i);
	            }

	        } catch (ParametrosInvalidosException e) {
	            System.out.println(e.getMessage());
	        } catch (NumberFormatException e) {
	            System.out.println("Os parâmetros devem ser números inteiros.");
	        } catch (IllegalArgumentException e) {
	            System.out.println(e.getMessage());
	        }
	    }
	}
package controledefluxo;

public class ParametrosInvalidosException extends Exception {
    public ParametrosInvalidosException(String mensagem) {
        super(mensagem);
    }
}
}
