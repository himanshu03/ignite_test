import org.testng.log4testng.Logger;

interface My {
	public final Logger logger = Logger.getLogger(MainMe.class);
}


class MainMe
{
	public static void main(String[] args) {
		
		new ThreadA("A");
		new ThreadB("B");
	}
}

class MainLogic {

	public static MainLogic getInstance() {
		MainLogic comm = null;
		try {
			comm = new MainLogic();
		} catch (Exception e) {
			return null;
		}
		return comm;
	}

	public static void setPONID(int no) {
		try {

			for (int i = 1; i <= 10; i++) {
				System.out.println(no * i);
				Thread.currentThread().wait();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}

class ThreadA extends Thread {
	ThreadA(String name) {
		super(name);
		start();
	}

	@SuppressWarnings("static-access")
	public void run() {
		try {
			String thread_Name = Thread.currentThread().getName();
			long thread_ID = Thread.currentThread().getId();

			My.logger.info(thread_Name + " : with thread ID : " + thread_ID + " is starting Up");
			while (true) {

				MainLogic comm = MainLogic.getInstance();
				comm.setPONID(5);
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}

class ThreadB extends Thread {
	ThreadB(String name) {
		super(name);
		start();
	}

	@SuppressWarnings("static-access")
	public void run() {
		try {
			String thread_Name = Thread.currentThread().getName();
			long thread_ID = Thread.currentThread().getId();

			My.logger.info(thread_Name + " : with thread ID : " + thread_ID + " is starting Up");
			while (true) {

				MainLogic comm = MainLogic.getInstance();
				comm.setPONID(5);
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}