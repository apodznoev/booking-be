package com.comsysto.training;

import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.servlet.ServletContextHandler;
import org.eclipse.jetty.servlet.ServletHolder;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

@ComponentScan(basePackageClasses = Application.class)
public class Application {

    public static void main(String[] args) throws Exception {
        AnnotationConfigWebApplicationContext applicationContext = new AnnotationConfigWebApplicationContext();
        applicationContext.register(Application.class);
        applicationContext.registerShutdownHook();

        DispatcherServlet dispatcherServlet = new DispatcherServlet(applicationContext);

        ServletContextHandler servletContextHandler = new ServletContextHandler();
        servletContextHandler.addServlet(new ServletHolder(dispatcherServlet), "/*");
        servletContextHandler.addEventListener(new ContextLoaderListener(applicationContext));
        Server server = new Server( Integer.parseInt(applicationContext.getEnvironment().getProperty("jetty.port")));
        server.setHandler(servletContextHandler);

        server.start();
        server.join();
    }

}

