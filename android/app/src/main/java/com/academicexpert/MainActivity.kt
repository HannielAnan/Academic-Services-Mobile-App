package com.academicexpert

import android.os.Bundle
import com.facebook.react.ReactActivity
import org.devio.rn.splashscreen.SplashScreen

class MainActivity : ReactActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        SplashScreen.show(this)  // Corrected to Kotlin syntax
        super.onCreate(savedInstanceState)
    }

    /**
     * Returns the name of the main component registered from JavaScript. This is used to schedule
     * rendering of the component.
     */
    override fun getMainComponentName(): String = "academicexpert"

    // Removed createReactActivityDelegate as it's not properly set up in this snippet.
    // If you need this for enabling new architecture, you need to ensure it's correctly implemented.
}
